addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  if (request.method === 'POST') {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return new Response('No file uploaded', { status: 400 });
    }

    try {
      const fileName = `uploads/${Date.now()}_${file.name}`;
      console.log(`Uploading file: ${fileName}`);
      const url = await uploadToR2(file, fileName);
      console.log(`File uploaded successfully to R2: ${url}`);
      return new Response(JSON.stringify({ url }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // Allow all origins
          'Access-Control-Allow-Methods': 'POST', // Allow POST requests
          'Access-Control-Allow-Headers': 'Content-Type', // Allow Content-Type header
        },
      });
    } catch (error) {
      console.error(`Failed to upload: ${error.message}`);
      return new Response(`Failed to upload: ${error.message}`, { status: 500 });
    }
  }

  return new Response('Invalid request', { status: 400 });
}

async function uploadToR2(file, fileName) {
  try {
    console.log(`Uploading to R2 with file name: ${fileName}`);
    const object = await MY_BUCKET.put(fileName, file.stream(), {
      httpMetadata: { contentType: file.type },
    });
  
    // If the upload is successful, log the URL and return it
    const fileUrl = `https://portfolio-uploads.r2.cloudflarestorage.com/${fileName}`;
    console.log(`File successfully uploaded. URL: ${fileUrl}`);
    return fileUrl; // Return the URL of the uploaded file
  } catch (error) {
    console.error('Upload to R2 failed:', error);
    throw new Error('R2 file upload failed');
  }
}

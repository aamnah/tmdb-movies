
# Troubleshooting Netlify Functions

- **Getting HTML from Netlify function instead of JSON**: Check the function URL. The default URL structure is `https://<YOUR DOMAIN>/.netlify/functions/<FUNCTION NAME>` but if you give a custom path, it will become `https://<YOUR DOMAIN>/<FUNCTION PATH>`
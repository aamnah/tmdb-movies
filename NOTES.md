# Deploying to Netlify

CLI Commands:

- [netlify sites:create](https://cli.netlify.com/commands/sites#sitescreate)
- [netlify deploy](https://cli.netlify.com/commands/deploy)

### Install Netlify CLI
```bash
npm i -g netlify-cli 
```

### Login

```bash
netlify login
```

### Create a new site
To create a new site without continuous deployment, use `netlify sites:create`

- `netlify sites:create`
- `netlify sites:create --name my-new-site`

```bash
# Create an empty site (advanced)
netlify sites:create --name wuip-movies
```

```
? Team: Aamnah’s team

Site Created

Admin URL: https://app.netlify.com/sites/wuip-movies
URL:       https://wuip-movies.netlify.app
Site ID:   5756e02c-d6bf-495f-b7cb-e641e802a27a


Adding local .netlify folder to .gitignore file...
Linked to wuip-movies
```


### Deploy

```bash
netlify deploy \
  --prod true \
  --build true \
  --dir 'build/' \
  --message 'Deployed manually with Netlify CLI' \
  --open true \
  --site 5756e02c-d6bf-495f-b7cb-e641e802a27a
```

- `build` (boolean) - Run build command before deploying
- `dir` (string) - Specify a folder to deploy
- `message` (string) - A short message to include in the deploy log. (This message shows in the Netlify Admin)
- `open` (boolean) - Open site after deploy
- `prod` (boolean) - Deploy to production
- `site` (string) - A site name or ID to deploy to

Alternatively, you can save your build setting in a file called `netlify.toml` in the root of your project directory

```toml
# Netlify build config
[Settings]
ID = "5756e02c-d6bf-495f-b7cb-e641e802a27a"

[build]
base = "/e04-movies/"
command = 'npm run build'
publish = '/e04-movies/build/'
```

```bash
netlify deploy \
  --prod \
  --build \
  --message 'Deployed manually with Netlify CLI' \
  --open 
```

For some reason, i had to set `/e04-movies/` as the `base`. It kept trying to run `npm run build` in the parent folder `wuip-exercises`, which kept failing because that's not where the `package.json file was`

For boolean values, you do not have to pass `true` as a value, just passing the `--flag` is enough

- `context` (string) - Context to use when resolving build configuration 
  - `--context` can only be used in combination with the `--build`  flag

- `--prod` deploys to the main site URL while `--prod false` will deploy to a draft URL for preview
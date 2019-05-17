# Create new directory
mkdir $1/docsource

# Copy files
cp -r ./components $1/docsource/components
cp -r ./layouts $1/docsource/layouts
cp -r ./lib $1/docsource/lib
cp -r ./pages $1/docsource/pages
cp -r ./static $1/docsource/static
cp ./.gitignore $1/docsource/.gitignore
cp ~/github/docs-template/build.sh $1/docsource/build.sh
cp ~/github/docs-template/next.config.js $1/docsource/next.config.js
cp ~/github/docs-template/package-lock.json $1/docsource/package-lock.json
cp ~/github/docs-template/package.json $1/docsource/package.json
cp ~/github/docs-template/Vars.js $1/docsource/Vars.js
cp ~/github/docs-template/Vars.less $1/docsource/Vars.less

# Move to new directory
cd $1/docsource

# Get dependencies
npm install
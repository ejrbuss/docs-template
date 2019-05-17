# Create new directory
mkdir $1/docsource

# Copy files
cp -r ./components $1/docsource/components
cp -r ./layouts $1/docsource/layouts
cp -r ./lib $1/docsource/lib
cp -r ./pages $1/docsource/pages
cp -r ./static $1/docsource/static
cp ./.gitignore $1/docsource/.gitignore
cp ./build.sh $1/docsource/build.sh
cp ./next.config.js $1/docsource/next-config.js
cp ./package-lock.json $1/docsource/package-lock.json
cp ./package.json $1/docsource/package.json
cp ./Vars.js $1/docsource/Vars.js
cp ./Vars.less $1/docsource/Vars.less

# Move to new directory
cd $1/docsource

# Get dependencies
npm install
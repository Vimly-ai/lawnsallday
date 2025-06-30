#!/bin/bash

echo "🚀 Deploying Lawns All Day website with new images..."

# Build the site
echo "📦 Building the site..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎉 Website is ready with all professional images and icons!"
    echo ""
    echo "📋 Summary of changes added:"
    echo "  ✅ Professional hero banner image"
    echo "  ✅ Service images for all lawn care services"
    echo "  ✅ Location-specific images for Idaho cities"
    echo "  ✅ Professional SVG icons for all services"
    echo "  ✅ Company logo and favicon"
    echo "  ✅ Optimized images for web performance"
    echo ""
    echo "🌐 Local preview available at: http://localhost:9000"
    echo "🌐 Live site: https://3801c960-2d76-4b27-940b-3f672901825c.netlify.app"
    echo ""
    echo "📝 To deploy to live site:"
    echo "   1. Push changes to GitHub repository"
    echo "   2. Netlify will automatically rebuild and deploy"
    echo "   3. Or use Netlify CLI: npx netlify deploy --prod --dir=dist"
    echo ""
    echo "✨ The website now looks like a professional lawn care business!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

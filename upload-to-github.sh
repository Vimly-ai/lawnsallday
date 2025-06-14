#!/bin/bash

# Git initialization and push script for Lawns All Day website

echo "🌱 Preparing to upload Lawns All Day website to GitHub..."

# Initialize git if not already initialized
if [ ! -d .git ]; then
    echo "📁 Initializing git repository..."
    git init
fi

# Add all files
echo "📝 Adding all files to git..."
git add .

# Create initial commit
echo "💾 Creating commit..."
git commit -m "Complete Lawns All Day website - initial commit

- Full Astro + Tailwind CSS implementation
- All service pages (lawn mowing, landscaping, tree trimming, etc.)
- All location pages (Boise, Meridian, Eagle, Nampa, etc.)
- Responsive design with mobile optimization
- Contact forms with Netlify integration
- SEO optimization with sitemap
- Ready for deployment"

# Add remote if not already added
if ! git remote | grep -q "origin"; then
    echo "🔗 Adding GitHub remote..."
    git remote add origin https://github.com/Vimly-ai/lawnsallday.git
fi

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo "✅ Done! Your website has been uploaded to GitHub."
echo "📍 Repository: https://github.com/Vimly-ai/lawnsallday"
echo ""
echo "Next steps:"
echo "1. Visit your GitHub repository"
echo "2. Connect it to Netlify for deployment"
echo "3. Add your logo images to public/images/"
echo "4. Your site will be live!"

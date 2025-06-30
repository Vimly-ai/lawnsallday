#!/bin/bash

# Create directories
mkdir -p public/images/services public/images/locations

# Download logo (convert to PNG)
curl -L "https://img.freepik.com/premium-vector/lawn-care-service-logo-design-lawn-mower-logo_712837-63.jpg" -o public/images/logo.jpg
convert public/images/logo.jpg public/images/logo.png 2>/dev/null || cp public/images/logo.jpg public/images/logo.png

# Download hero image
curl -L "https://www.andersonorganiclawn.com/uplift-data/images/banners/banner-2.jpg" -o public/images/lawn-care-hero.jpg

# Download service images
curl -L "https://warnersoutdoorsolutions.com/wp-content/uploads/lawn_fertilization_weed_control_mn-scaled.jpg" -o public/images/services/fertilization-and-weed-control.jpg

curl -L "https://www.lawncarecamas.com/wp-content/uploads/2019/01/bg-hero.jpg" -o public/images/services/landscaping-services.jpg

curl -L "https://irp-cdn.multiscreensite.com/82f2a421/dms3rep/multi/IRRIGATION-ef159d39.jpg" -o public/images/services/sprinkler-system-installation.jpg

curl -L "https://rslandscapinginc.com/wp-content/uploads/2020/09/Hedge-Trimming-Bush-Trimming-and-Shrub-Trimming-Albuquerque-NM-R-S-Landscaping-505-271-8419-b.jpg" -o public/images/services/tree-and-bush-trimming.jpg

# Download location images
curl -L "https://live.staticflickr.com/1724/42826206922_c14cec5741_b.jpg" -o public/images/locations/caldwell-idaho.jpg

curl -L "https://www.leathamlandscapes.com/wp-content/uploads/2019/04/Stan-leatham-landscaping-0018.jpg" -o public/images/locations/eagle-idaho.jpg

curl -L "https://www.lawnbuddies.com/hubfs/Images/Crew%20Team%20technician%20Hose%20PPP%202.jpg" -o public/images/locations/kuna-idaho.jpg

echo "All images downloaded successfully!"

UPDATE "OutreachItem"
SET "outreachMethod" = CASE
  WHEN "outreachMethod" IN ('PHONE', 'Phone', 'phone', 'TEXT', 'Text', 'text') THEN 'PHONE_TEXT'
  WHEN "outreachMethod" IN (
    'SOCIAL_MEDIA',
    'Social media',
    'social media',
    'SOCIAL_MEDIA_DM',
    'Social media/dm',
    'social media/dm',
    'DM',
    'dm'
  ) THEN 'SOCIAL_MEDIA_DM'
  WHEN "outreachMethod" IN ('EMAIL', 'Email', 'email') THEN 'EMAIL'
  WHEN "outreachMethod" IN ('IN_PERSON', 'In person', 'in person') THEN 'IN_PERSON'
  WHEN "outreachMethod" IN ('OTHER', 'Other', 'other') THEN 'OTHER'
  ELSE 'OTHER'
END
WHERE "outreachMethod" IS NOT NULL;

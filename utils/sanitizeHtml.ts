import DOMPurify from 'dompurify';

export const sanitizeHtml = (
  html: string | null | undefined,
  options?: DOMPurify.Config,
): string => {
  if (!html || typeof html !== 'string') {
    return '';
  }

  return DOMPurify.sanitize(html, {
    FORBID_TAGS: ['script', 'object', 'embed', 'base', 'link'],
    FORBID_ATTR: [
      'onerror',
      'onload',
      'onclick',
      'onmouseover',
      'onfocus',
      'onblur',
    ],
    RETURN_TRUSTED_TYPE: false,
    ...options,
  }) as string;
};

import * as React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { H5 } from 'baseui/typography';
import {
  FiMail as Mail,
  FiYoutube as Youtube,
  FiInstagram as Instagram,
  FiFacebook as Facebook,
  FiTwitter as Twitter,
} from 'react-icons/fi';

const FooterSocialMedia = () => {
  const [css] = useStyletron();
  return (
    <Block
      paddingLeft={['1rem', '1rem', '0']}
      paddingRight={['0', '0', '2rem']}
      display="flex"
      justifyContent={['center', 'center', 'flex-end']}
    >
      <H5>
        <Twitter
          className={css({
            marginRight: '1rem',
          })}
        />
        <Facebook
          className={css({
            marginRight: '1rem',
          })}
        />
        <Instagram
          className={css({
            marginRight: '1rem',
          })}
        />
        <Youtube
          className={css({
            marginRight: '1rem',
          })}
        />
        <Mail
          className={css({
            marginRight: '1rem',
          })}
        />
      </H5>
    </Block>
  );
};

export default FooterSocialMedia;

import * as React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Input, MaskedInput } from 'baseui/input';
import { FormControl } from 'baseui/form-control';
import { Select, TYPE, Value } from 'baseui/select';
import { Textarea } from 'baseui/textarea';
import { useState } from 'react';
import { Block } from 'baseui/block';
import { graphql, useStaticQuery } from 'gatsby';
import { Button } from 'baseui/button';
import SectionHeader from '../components/SectionHeader';

interface ServicesProps {
  title?: string;
  label?: string;
  id?: string;
}

const Contact = ({ location }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [email, setEmail] = useState('');
  const [services, setServices] = React.useState<Value>([]);
  const [comments, setComments] = useState('');

  const data = useStaticQuery(
    graphql`
      query MyQuery {
        allSanityServicePage {
          nodes {
            title
          }
        }
      }
    `
  );
  const servicesRaw: ServicesProps[] = data.allSanityServicePage.nodes;
  const servicesArray = servicesRaw.map((service: ServicesProps) => {
    const modifiedService = {
      ...service,
      label: service.title,
      id: service.title,
    };
    delete modifiedService.title;
    return modifiedService;
  });

  const string = location?.state?.from
    ? location?.state?.from
        .replace('-', ' ')
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) =>
          letter.toUpperCase()
        )
    : '';

  React.useEffect(() => {
    if (string !== '') {
      const linkedService = servicesArray.find(
        (service) => service.label === string
      );
      if (linkedService !== undefined && services !== undefined) {
        setServices([...services, linkedService]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <FlexGrid
      flexGridColumnCount={[1]}
      maxWidth="1110px"
      margin={['0', '0', '0 2rem', '0 2rem']}
      flexGridRowGap={['scale800', 'scale800', 'scale1600']}
    >
      <FlexGridItem />
      <FlexGridItem>
        <SectionHeader
          title={"Let's Get Something Started Today!"}
          description={
            <>
              Prefer phonecalls? You can reach us at{' '}
              <a href="tel:503-381-9040">(503) 381-9040</a>
            </>
          }
        />
      </FlexGridItem>
      <FlexGridItem
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap
        flexDirection="column"
        flexGridColumnCount={1}
      >
        <Block width={['90%', '90%', '90%', '45%']}>
          <form method="POST" action="https://formspree.io/f/xpzokjnr">
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            <FormControl label={() => 'First Name'}>
              <Input
                name="First Name"
                autoFocus
                value={firstName}
                onChange={(event) => setFirstName(event.currentTarget.value)}
                // placeholder="First Name"
                required
              />
            </FormControl>
            <FormControl label={() => 'Last Name'}>
              <Input
                name="Last Name"
                value={lastName}
                onChange={(event) => setLastName(event.currentTarget.value)}
                // placeholder="Last Name"
                required
              />
            </FormControl>
            <FormControl label={() => 'E-mail Address'}>
              <Input
                name="_replyto"
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
                // placeholder="Vancouver, Washington"
                required
              />
            </FormControl>
            <FormControl label={() => 'City & State'}>
              <Input
                name="Location"
                value={formLocation}
                onChange={(event) => setFormLocation(event.currentTarget.value)}
                // placeholder="Vancouver, Washington"
                required
              />
            </FormControl>
            <FormControl label={() => 'Phone Number'}>
              <MaskedInput
                name="Phone Number"
                placeholder="(777)777-7777"
                mask="(999) 999-9999"
              />
            </FormControl>
            <FormControl label={() => 'What Services Are You Interested In?'}>
              <Select
                options={servicesArray}
                labelKey="id"
                valueKey="label"
                placeholder="Choose a service"
                maxDropdownHeight="300px"
                type={TYPE.search}
                multi
                onChange={({ value }) => {
                  setServices(value);
                }}
                value={services}
              />
            </FormControl>
            <input
              readOnly
              name="Services"
              type="text"
              style={{ display: 'none' }}
              value={services.map((service) => ` ${service.label}`)}
            />
            <FormControl label={() => 'Comments'}>
              <Textarea
                name="Comments"
                value={comments}
                onChange={(e) => setComments(e.currentTarget.value)}
                // placeholder="Feel free to provide any details that you feel we should know."
                overrides={{
                  Input: {
                    style: {
                      maxHeight: '300px',
                      minHeight: '100px',
                      minWidth: '300px',
                      width: '100vw', // fill all available space up to parent max-width
                      resize: 'vertical',
                    },
                  },
                  InputContainer: {
                    style: {
                      maxWidth: '100%',
                      width: 'min-content',
                    },
                  },
                }}
              />
            </FormControl>
            <Button
              overrides={{
                BaseButton: {
                  style: ({ $theme }) => ({
                    backgroundColor: $theme.colors.accent,
                    width: '100%',
                    ':hover': {
                      backgroundColor: $theme.colors.accent500,
                    },
                  }),
                },
              }}
            >
              Submit
            </Button>
          </form>
        </Block>
      </FlexGridItem>
    </FlexGrid>
  );
};

export default Contact;

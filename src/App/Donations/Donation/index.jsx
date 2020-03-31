import React from 'react';
import { Card } from '../../../components/Card';
import { Title } from '../../../components/Title';
import { Button } from '../../../components/Button';
import { AppContext } from '../../../components/Context';
import { translate } from '../../../translations';

const CLASSNAME = 'donation';
const Donation = (props) => {
    const { lang } = React.useContext(AppContext);
    const { name, logo, description, link, tweet, image, details, keywords } = props;

    return (
        <Card className={CLASSNAME}>
            { logo && <img className={`${CLASSNAME}__logo`} src={logo} alt={name} loading="lazy" /> }
            <div className={`${CLASSNAME}__content`}>
                { name && <Title className={`${CLASSNAME}__title`} importance={2} theme="dark">{name}</Title> }
                { description && <p className={`${CLASSNAME}__description`} dangerouslySetInnerHTML={{ __html: description[lang] }} /> }
                {
                    link && (
                        <Button className={`${CLASSNAME}__action`} asLink href={link} target="_blank">
                            {translate('DONATE', lang)}
                        </Button>
                    )
                }
                {
                    details && (
                        <Button className={`${CLASSNAME}__action`} asLink href={details} target="_blank">
                            {translate('SEE_DETAILS', lang)}
                        </Button>
                    )
                }
                {
                    tweet && (
                        <div className={`${CLASSNAME}__tweet`} dangerouslySetInnerHTML={{ __html: tweet }}>
                        </div>
                    )
                }
                {
                    image && <img className={`${CLASSNAME}__image`} src={image} alt={name} loading="lazy" />
                }
            </div>
        </Card>
    );
};

export { Donation };
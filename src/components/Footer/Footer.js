import styled from 'styled-components';

// Import components
import Button from '@mui/material/Button';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 16px;
    align-items: center;
`;

const Signature = styled.span`
    color: #8a8a8a;
    font-weight: 400;
    min-width: 300px;
`;

const Tools = styled(Signature)`
    text-align: center;
    flex-grow: 1;
`;

const BtnContainer = styled.div`
    min-width: 300px;
    text-align: right;
`;

const Footer = () => {
    // Handle scroll to top button
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return(
        <Container>
            <Signature>Anthony Dip, Third-year Comp Sci @ UoG</Signature>
            <Tools>Made with React.js</Tools>
            <BtnContainer>
                <Button 
                    onClick={handleScroll}
                    variant='contained'
                    sx={{
                        backgroundColor: '#8a8a8a',
                        fontFamily: `'Inter', sans-serif;`,
                        
                    }}
                >
                    Scroll to Top
                </Button>
            </BtnContainer>
            
        </Container>
    );
};

export default Footer;
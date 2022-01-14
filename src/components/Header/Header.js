import styled from 'styled-components';

// Import components
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

// Import icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const HeaderContainer = styled.div`
    display: flex;
    padding: 16px;
`;

const ToggleContainer = styled.div`
    display: table;
    margin-left: auto;
`;

const MediaContainer = styled.div`
    display: table;
`;

const Header = ({ theme, toggleTheme }) => {
    return(
        <HeaderContainer>

            <MediaContainer>
                <Stack direction='row' spacing={1}>
                    <IconButton onClick={() => window.open('https://github.com/anthonydip')}>
                        <GitHubIcon sx={{ color: '#0ea5e9' }}/>
                    </IconButton>
                    
                    <IconButton onClick={() => window.open('https://www.linkedin.com/in/adip01/')}>
                        <LinkedInIcon sx={{ color: '#0ea5e9' }}/>
                    </IconButton>
                </Stack>
            </MediaContainer>

            <ToggleContainer>
                <IconButton onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <DarkModeIcon sx={{ color: '#0ea5e9' }}/>
                    ) : (
                        <LightModeIcon sx={{ color: '#0ea5e9' }} />
                    )}
                </IconButton>
            </ToggleContainer>

            
        </HeaderContainer>
    )
};

export default Header;
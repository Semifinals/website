import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  Typography
} from "@mui/material"
import { useState } from "preact/hooks"
import { Bookmark, BookmarkBorder, Share } from "@mui/icons-material"

export default function Home() {
  const [selected, setSelected] = useState(false)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.youtube.com/vi/VGDfR-34q8k/maxresdefault.jpg"
          alt="Example background"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Example Event 1
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is the description of the event which will go into a bit of
            detail about it
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Box sx={{ justifyContent: "left" }}>
          <Stack direction="row" spacing={1}>
            <Chip label="Rocket League" variant="outlined" size="small" />
            <Chip label="C-Tier" variant="outlined" size="small" />
          </Stack>
        </Box>
        <Box sx={{ justifyContent: "right" }}>
          <Tooltip title="Save to watchlist">
            <IconButton
              size="small"
              color="primary"
              onClick={() => setSelected(s => !s)}
            >
              {selected ? <Bookmark /> : <BookmarkBorder />}
            </IconButton>
          </Tooltip>
          <Tooltip title="Share">
            <IconButton>
              <Share />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  )
}

import React from "react";
import Image from "../../assets/ganglandImage.jpg";

import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Link,
  Box,
  Grid,
} from "@material-ui/core";

export default function BoxSx() {
  return (
    <Grid
      container
      direction="row"
      margin="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        sx={{
          height: 1200,
          padding: 5,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box
          style={{
            backgroundColor: "pink",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            display: "flex",
          }}
        >
          {/* <Typography variant="h2">Article Title</Typography> */}
          <Card>
            <CardContent>
              <Typography variant="h2">Article Title</Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="440"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dr Hans Kluge said a "west-to-east tidal wave" of Omicron was
                sweeping across the region, on top of a surge in the Delta
                variant. The projection was based on the seven million new cases
                reported across Europe in the first week of 2022. The number of
                infections has more than doubled in a two-week period. "Today
                the Omicron variant represents a new west-to-east tidal wave,
                sweeping across the region on top of the Delta surge that all
                countries were managing until late 2021," Dr Kluge told a news
                conference. He quoted the Seattle-based Institute for Health
                Metrics and Evaluation as forecasting that "more than 50 percent
                of the population in the region will be infected with Omicron in
                the next six to eight weeks". He said European and Central Asian
                countries remained under "intense pressure" as the virus spread
                from western countries into the Balkans. "How each country now
                responds must be informed by its epidemiological situation,
                available resources, vaccination uptake status and
                socio-economic context", he added. Recent studies suggest that
                Omicron is less likely to make people seriously ill than
                previous Covid variants. But Omicron is still highly contagious
                and can infect people even if they are fully vaccinated. The
                record number of people catching it has left health systems
                under severe strain. On Monday, the UK reported a further
                142,224 confirmed cases of the virus and 77 deaths. A number of
                hospitals have declared "critical" incidents due to staff
                absences and rising pressures caused by Covid. Elsewhere,
                hospital numbers are also rising. France's Health Minister
                Olivier Veran warned last week that January would be tough for
                hospitals. He added that Omicron patients were taking up
                "conventional" beds in hospitals while Delta was putting a
                strain on ICU departments. In eastern Europe, Poland reported
                that 100,000 people had died from the virus in the country since
                the start of the pandemic. Poland now has the sixth-highest
                mortality rate in the world from Covid-19, and almost 40% of its
                population remains unvaccinated. In Russia, top consumer health
                official Anna Popova told a meeting of the government's
                coronavirus task force that without action to control the spread
                of the virus, the daily number of new Covid cases there could
                reach 100,000. The daily infection rate had recently been
                declining from a peak of 41,335 cases recorded in early
                November, Reuters news agency reports. Ms Popova said 305 known
                cases of the Omicron variant had been detected so far, in 13 of
                the country's regions. Russia has registered at least 311,281
                deaths and 10.5 million cases to date. On Monday, the
                pharmaceutical firm Pfizer said it would be able to launch a
                version of its vaccine that offers special protection against
                Omicron, to be rolled out in March. Health experts say it is not
                yet clear whether this is needed.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{
          height: 1200,
          padding: 5,
          backgroundColor: "primary.light",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <Box
          style={{
            backgroundColor: "pink",
            width: "100%",
            height: "100%",
            // justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            style={{
              background: "#F0F0F0",
              width: "70%",
              height: "80px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "20px",
              marginTop: "40px",
            }}
          >
            <Typography>
              <Link>Senior Tories urge PM to quit after party apology</Link>
            </Typography>
          </Box>
          <Box
            style={{
              background: "#F0F0F0",
              width: "70%",
              height: "80px",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "20px",
              marginTop: "40px",
            }}
          >
            <Typography>
              <Link>
                Jonathan Van-Tam to leave role as deputy chief medical officer
              </Link>
            </Typography>
          </Box>
          <Box
            style={{
              background: "#F0F0F0",
              width: "70%",
              height: "80px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyItems: "center",
              padding: "20px",
              marginTop: "40px",
            }}
          >
            <Typography>
              <Link>Ministers back PM's call to wait for party inquiry</Link>
            </Typography>
          </Box>
          <Card style={{ margin: "auto" }}>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography>
                <Link>Senior Tories urge PM to quit after party apology</Link>
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography>
                <Link>Ministers back PM's call to wait for party inquiry</Link>
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="140"
              image={Image}
              alt="green iguana"
            />
            <CardContent>
              <Typography>
                <Link>Playtime: Is it time we took 'play' more seriously?</Link>
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

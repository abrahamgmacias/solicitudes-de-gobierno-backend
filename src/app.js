import "os";

const app = express();

// Middleware 
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/auth', authRouter);
// app.use('/api/solicitudes', dashboardRouter);

export default app;
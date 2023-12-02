import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://mprtwhngftpzfduaxpbi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wcnR3aG5nZnRwemZkdWF4cGJpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODU5OTE3MywiZXhwIjoyMDE0MTc1MTczfQ.fSLu6pAY2q3EdFQo7V8wHEv2RFoh8wI3y_A2uMqTlFw')

async function getEqAnd(){

    for(let i = 0; i < 10; i++){
        console.time("SBIneqAnd");
        const { data, error } = await supabase
            .from('Patient data')
            .select()
            .gt('Age', 32)
            .eq('Chest Pain', 5);
        console.timeEnd("SBIneqAnd");
    }
}

getEqAnd()
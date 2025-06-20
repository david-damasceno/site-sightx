
-- Criar tabela para armazenar tokens do Google para cada usuário
CREATE TABLE public.user_google_tokens (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  token_type TEXT NOT NULL DEFAULT 'Bearer',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Adicionar índice único para user_id (cada usuário só pode ter um conjunto de tokens)
CREATE UNIQUE INDEX user_google_tokens_user_id_idx ON public.user_google_tokens(user_id);

-- Habilitar RLS
ALTER TABLE public.user_google_tokens ENABLE ROW LEVEL SECURITY;

-- Política para que usuários só vejam seus próprios tokens
CREATE POLICY "Users can view their own Google tokens" 
  ON public.user_google_tokens 
  FOR SELECT 
  USING (auth.uid() = user_id);

-- Política para que usuários possam inserir seus próprios tokens
CREATE POLICY "Users can insert their own Google tokens" 
  ON public.user_google_tokens 
  FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Política para que usuários possam atualizar seus próprios tokens
CREATE POLICY "Users can update their own Google tokens" 
  ON public.user_google_tokens 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Política para que usuários possam deletar seus próprios tokens
CREATE POLICY "Users can delete their own Google tokens" 
  ON public.user_google_tokens 
  FOR DELETE 
  USING (auth.uid() = user_id);

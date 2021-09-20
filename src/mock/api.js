import { createServer } from 'miragejs';

const server = createServer({
  routes() {
    this.namespace = 'api';

    this.get('/messages', (schema, request) => {
      let params = request.queryParams;
      Object.keys(params).forEach(
        key => {
          if(!params[key]){
            delete params[key];
          }
        }
      )

      return schema.db.messages.where(params);
    });

    this.post('/message', (schema, request) => {
      return schema.db.messages.insert(request.requestBody);
    });

    this.get('/channels', (schema) => {
      return schema.db.channels;
    });

    this.get('/triggers', (schema) => {
      return schema.db.triggers;
    });

  }
});


server.db.loadData(
  {
    messages: [
      {
        id: 1,
        channel: 'sms',
        trigger: 'abertura_conta',
        timer: '15:00',
        message: ' Na correria do dia a dia a Oi Conta Zap te ajuda a lembrar de algumas coisinhas! Ja conseguiu pagar seu boleto? Se sim, desconsidere a mensagem'
      },
      {
        id: 21,
        channel: 'sms',
        trigger: 'fez_pix',
        timer: '5:00',
        message: ' Na correria do dia a dia a Oi Conta Zap te ajuda a lembrar de algumas coisinhas! Ja conseguiu pagar seu boleto? Se sim, desconsidere a mensagem'
      },
      {
        id: 2,
        channel: 'whatsapp',
        trigger: 'abertura_conta',
        timer: '73:00',
        message: ' Na correria do dia a dia a Oi Conta Zap te ajuda a lembrar de algumas coisinhas! Ja conseguiu pagar seu boleto? Se sim, desconsidere a mensagem'
      },
      {
        id: 1631312843768,
        channel: 'whatsapp',
        trigger: 'criou_chave_pix',
        timer: '12:00',
        message: 'vI  que você criou um chave ?'
      },
      {
        id: 1631313726738,
        channel: 'email',
        trigger: 'fez_pix',
        timer: '2323',
        message: '23232323'
      }
    ],
    channels: [
      {
        id: 111,
        name: 'email'
      },
      {
        id: 222,
        name: 'whatsapp'
      },
      {
        id: 333,
        name: 'sms'
      }
    ],
    triggers: [
      {
        id: 1,
        name: 'abertura_conta'
      },
      {
        id: 2,
        name: 'fez_pix'
      },
      {
        id: 3,
        name: 'recarregou_celular'
      },
      {
        id: 4,
        name: 'alterou_dados_pessois'
      },
      {
        id: 5,
        name: 'consultou_saldo'
      },
      {
        id: 6,
        name: 'fex_transferencia_outro_banco'
      },
      {
        id: 7,
        name: 'deletou_chave_pix'
      },
      {
        id: 8,
        name: 'criou_chave_pix'
      },
      {
        id: 9,
        name: 'falou_com_atendimento'
      }
    ]
  }
)
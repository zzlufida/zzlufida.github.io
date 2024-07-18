window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11683","name":"NE_ExpenseBalanceMoney_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view [dbo].[NE_ExpenseBalanceMoney_View]  \r\nas  \r\n select NE_ExpenseBalanceInfo.ExpenseVouchID as VouchID,NE_BalanceInfo.IOType,      \r\n   sum(case when NE_BalanceInfo.IOType=2 and NE_BalanceInfo.isVerify=0 and (NE_BalanceInfo.PayState=2 or  NE_BalanceInfo.IsNetPay=1) then isnull(NE_ExpenseBalanceInfo.VoucherMoney,0) else 0 end) as EverPayMoney,      \r\n   sum(case when NE_BalanceInfo.IOType=1 and NE_BalanceInfo.isVerify=0 and (NE_BalanceInfo.PayState=2 or NE_BalanceInfo.IsNetPay=1) then isnull(NE_ExpenseBalanceInfo.VoucherMoney,0) else 0 end) as EverReceiptMoney,      \r\n   sum(case when NE_BalanceInfo.IOType=2 and NE_BalanceInfo.PayState=0 then isnull(NE_ExpenseBalanceInfo.BalanceMoney,0) else 0 end) as ThisPayMoney,      \r\n   sum(case when NE_BalanceInfo.IOType=1 and NE_BalanceInfo.PayState=0 then isnull(NE_ExpenseBalanceInfo.BalanceMoney,0) else 0 end) as ThisReceiptMoney,      \r\n   sum(case when NE_BalanceInfo.IOType=2 and NE_BalanceInfo.PayState=0 then isnull(NE_ExpenseBalanceInfo.MidCurrencyMoney,0) else 0 end) as MidThisPayMoney,      \r\n   sum(case when NE_BalanceInfo.IOType=1 and NE_BalanceInfo.PayState=0 then isnull(NE_ExpenseBalanceInfo.MidCurrencyMoney,0) else 0 end) as MidThisReceiptMoney,      \r\n   0 as IsLoanBalance      \r\n  from NE_ExpenseBalanceInfo      \r\n  inner join NE_BalanceInfo      \r\n   on NE_ExpenseBalanceInfo.MainBalanceID=NE_BalanceInfo.ID      \r\n  group by NE_ExpenseBalanceInfo.ExpenseVouchID,NE_BalanceInfo.IOType","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_ExpenseBalanceMoney_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-249198","object_id":"column-249198","name":"VouchID","name_without_path":"VouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249199","object_id":"column-249199","name":"IOType","name_without_path":"IOType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249200","object_id":"column-249200","name":"EverPayMoney","name_without_path":"EverPayMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249201","object_id":"column-249201","name":"EverReceiptMoney","name_without_path":"EverReceiptMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249202","object_id":"column-249202","name":"ThisPayMoney","name_without_path":"ThisPayMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249203","object_id":"column-249203","name":"ThisReceiptMoney","name_without_path":"ThisReceiptMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249204","object_id":"column-249204","name":"MidThisPayMoney","name_without_path":"MidThisPayMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249205","object_id":"column-249205","name":"MidThisReceiptMoney","name_without_path":"MidThisReceiptMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249206","object_id":"column-249206","name":"IsLoanBalance","name_without_path":"IsLoanBalance","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
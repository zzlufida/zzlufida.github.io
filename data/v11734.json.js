window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11734","name":"NE_ReturnSumLoanMoney_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view [dbo].[NE_ReturnSumLoanMoney_View]\r\nas \r\n\tselect ReturnBluntLoan.LoanVouchID,ReturnBluntLoan.LoanVouchSubID,\r\n\t\tsum(isnull(ReturnBluntLoan.ReturnMoney,0)) as ReturnMoney,\r\n\t\tsum(isnull(ReturnBluntLoan.MidCurrencyMoney,0)) as MidCurrencyMoney,\r\n\t\tsum(isnull(ReturnBluntLoan.LocalMoney,0)) as LocalMoney,ReturnBluntLoan.IsUsed\r\n    from NE_ReturnLoanInfo as ReturnBluntLoan\r\n    where IsNull(IsUsed,1)=0\r\n    group by ReturnBluntLoan.LoanVouchID,ReturnBluntLoan.LoanVouchSubID,ReturnBluntLoan.IsUsed","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_ReturnSumLoanMoney_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-250605","object_id":"column-250605","name":"LoanVouchID","name_without_path":"LoanVouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250606","object_id":"column-250606","name":"LoanVouchSubID","name_without_path":"LoanVouchSubID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250607","object_id":"column-250607","name":"ReturnMoney","name_without_path":"ReturnMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250608","object_id":"column-250608","name":"MidCurrencyMoney","name_without_path":"MidCurrencyMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250609","object_id":"column-250609","name":"LocalMoney","name_without_path":"LocalMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250610","object_id":"column-250610","name":"IsUsed","name_without_path":"IsUsed","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
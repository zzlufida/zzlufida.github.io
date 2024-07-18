window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11718","name":"NE_MainLoanToReturn_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view [dbo].NE_MainLoanToReturn_View as    \r\nselect distinct\r\nNE_LoanVouch.ID\r\n,NE_LoanVouch.DeptID\r\n,NE_LoanVouch.LoanPersonID\r\n,NE_LoanVouch.ItemClassID \r\n,NE_LoanVouch.ItemID\r\n,NE_LoanVouch.Used\r\n,NE_LoanVouch.Currency \r\n,Code\r\n,NE_LoanVouch_Sub.PayType\r\n,NE_LoanVouch.ExchangeRate\r\nfrom NE_LoanVouch\r\nleft join NE_LoanVouch_Sub on NE_LoanVouch.ID=NE_LoanVouch_Sub.LoanVouchID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_MainLoanToReturn_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-250325","object_id":"column-250325","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250326","object_id":"column-250326","name":"DeptID","name_without_path":"DeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250327","object_id":"column-250327","name":"LoanPersonID","name_without_path":"LoanPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250328","object_id":"column-250328","name":"ItemClassID","name_without_path":"ItemClassID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250329","object_id":"column-250329","name":"ItemID","name_without_path":"ItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250330","object_id":"column-250330","name":"Used","name_without_path":"Used","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1024","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250331","object_id":"column-250331","name":"Currency","name_without_path":"Currency","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250332","object_id":"column-250332","name":"Code","name_without_path":"Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250333","object_id":"column-250333","name":"PayType","name_without_path":"PayType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-250334","object_id":"column-250334","name":"ExchangeRate","name_without_path":"ExchangeRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
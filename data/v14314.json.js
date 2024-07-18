window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14314","name":"vwNEExpenInfo","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwNEExpenInfo\r\nAS\r\nSELECT dbo.NE_ExpenLoanInfo.dblJE, dbo.NE_ExpenVouch.dtLoanDate, \r\n      dbo.NE_ExpenVouch.strAuditorID, dbo.Person.cPersonName, \r\n      dbo.NE_ExpenVouch.strVouchID, dbo.NE_ExpenLoanInfo.blnUsed, \r\n      dbo.NE_ExpenLoanInfo.LoanSubguid\r\nFROM dbo.Person RIGHT OUTER JOIN\r\n      dbo.NE_ExpenVouch ON \r\n      dbo.Person.cPersonCode = dbo.NE_ExpenVouch.strLoanID RIGHT OUTER JOIN\r\n      dbo.NE_ExpenLoanInfo ON \r\n      dbo.NE_ExpenVouch.GUID = dbo.NE_ExpenLoanInfo.Expenguid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwNEExpenInfo"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423908","object_id":"column-423908","name":"dblJE","name_without_path":"dblJE","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"12, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423909","object_id":"column-423909","name":"dtLoanDate","name_without_path":"dtLoanDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423910","object_id":"column-423910","name":"strAuditorID","name_without_path":"strAuditorID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423911","object_id":"column-423911","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423914","object_id":"column-423914","name":"strVouchID","name_without_path":"strVouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423912","object_id":"column-423912","name":"blnUsed","name_without_path":"blnUsed","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423913","object_id":"column-423913","name":"LoanSubguid","name_without_path":"LoanSubguid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
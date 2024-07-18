window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10828","name":"FM_QYWBHDeposit","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW FM_QYWBHDeposit\r\n AS \r\nSELECT strDepositID,dtDate, strBankCode, cBName, strAccID, dblDeposit, strExchName, nflat, dblNatural, dblSaveTime, dtEndDate, strMaker \r\n FROM dbo.Bank RIGHT JOIN dbo.FM_Deposit ON cBCode = strBankCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FM_QYWBHDeposit"},{"field":"Type","value":"View"}],"columns":[{"id":"column-206870","object_id":"column-206870","name":"strDepositID","name_without_path":"strDepositID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206871","object_id":"column-206871","name":"dtDate","name_without_path":"dtDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206872","object_id":"column-206872","name":"strBankCode","name_without_path":"strBankCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206873","object_id":"column-206873","name":"cBName","name_without_path":"cBName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206874","object_id":"column-206874","name":"strAccID","name_without_path":"strAccID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206875","object_id":"column-206875","name":"dblDeposit","name_without_path":"dblDeposit","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206876","object_id":"column-206876","name":"strExchName","name_without_path":"strExchName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206877","object_id":"column-206877","name":"nflat","name_without_path":"nflat","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206878","object_id":"column-206878","name":"dblNatural","name_without_path":"dblNatural","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"15, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206879","object_id":"column-206879","name":"dblSaveTime","name_without_path":"dblSaveTime","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206880","object_id":"column-206880","name":"dtEndDate","name_without_path":"dtEndDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206881","object_id":"column-206881","name":"strMaker","name_without_path":"strMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
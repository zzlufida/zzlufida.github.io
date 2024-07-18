window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12183","name":"SA_BillSK","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW SA_BillSK\r\nAS\r\nSELECT iSOsID, SUM(iMoneySum) AS iMoneySum, SUM(iExchSum) AS iExchSum\r\nFROM SaleBillVouchs\r\nGROUP BY iSOsID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SA_BillSK"},{"field":"Type","value":"View"}],"columns":[{"id":"column-284441","object_id":"column-284441","name":"iSOsID","name_without_path":"iSOsID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284442","object_id":"column-284442","name":"iMoneySum","name_without_path":"iMoneySum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-284443","object_id":"column-284443","name":"iExchSum","name_without_path":"iExchSum","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
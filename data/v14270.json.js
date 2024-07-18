window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14270","name":"vwFM_FinFxRetSumAll","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_FinFxRetSumAll\r\nAS\r\nSELECT strFinID,SUM(isnull(dblBaseMon,0)) AS N'还本金额', SUM(isnull(dblReAcc,0)) \r\n      AS N'还息金额'\r\nFROM dbo.FM_FinReturn\r\nGROUP BY strFinID","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_FinFxRetSumAll"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423129","object_id":"column-423129","name":"strFinID","name_without_path":"strFinID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423130","object_id":"column-423130","name":"还本金额","name_without_path":"还本金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423131","object_id":"column-423131","name":"还息金额","name_without_path":"还息金额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
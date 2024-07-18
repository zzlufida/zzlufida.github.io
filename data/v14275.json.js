window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14275","name":"vwFM_PartFxRetSumAll","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.vwFM_PartFxRetSumAll\r\nAS\r\nSELECT strUnitCode,strExchName,SUM(isnull(dblReMon,0)) AS N'还筹资额', SUM(isnull(dblRegle,0)) \r\n      AS N'还股利额'\r\nFROM dbo.FM_RePartner\r\nGROUP BY strUnitCode,strExchName","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwFM_PartFxRetSumAll"},{"field":"Type","value":"View"}],"columns":[{"id":"column-423163","object_id":"column-423163","name":"strUnitCode","name_without_path":"strUnitCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423164","object_id":"column-423164","name":"strExchName","name_without_path":"strExchName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423165","object_id":"column-423165","name":"还筹资额","name_without_path":"还筹资额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-423166","object_id":"column-423166","name":"还股利额","name_without_path":"还股利额","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
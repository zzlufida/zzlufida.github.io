window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13803","name":"v_pu_purchasemoney_forex","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  view v_pu_purchasemoney_forex as\r\n         SELECT SoDid as AutoID,SUM(ISNULL(iNatSum,0)) AS fnattaxmoney, SUM(ISNULL(iNatMoney,0)) AS fnatmoney\r\n         FROM Po_PoDetails\r\n         WHERE Po_PoDetails.cSource=N'exorder'\r\n         GROUP BY SoDid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_pu_purchasemoney_forex"},{"field":"Type","value":"View"}],"columns":[{"id":"column-400634","object_id":"column-400634","name":"AutoID","name_without_path":"AutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-400635","object_id":"column-400635","name":"fnattaxmoney","name_without_path":"fnattaxmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-400636","object_id":"column-400636","name":"fnatmoney","name_without_path":"fnatmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14228","name":"vwContract","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW vwContract AS\r\n\r\nSELECT dbo.CM_Contract_B.GUID,\r\n    dbo.CM_Contract_B.strContractID, case when istatus=0 then 'A' else 'B'  end As Src, intPre, intVaryID\r\nFROM dbo.CM_Contract_B\r\nUNION ALL\r\nSELECT dbo.CM_Contract_C.GUID,\r\n    dbo.CM_Contract_C.strContractID, case when istatus=0 then 'A' else 'C' end As Src, intPre, intVaryID\r\nFROM dbo.CM_Contract_C","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vwContract"},{"field":"Type","value":"View"}],"columns":[{"id":"column-422613","object_id":"column-422613","name":"GUID","name_without_path":"GUID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422614","object_id":"column-422614","name":"strContractID","name_without_path":"strContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422615","object_id":"column-422615","name":"Src","name_without_path":"Src","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422616","object_id":"column-422616","name":"intPre","name_without_path":"intPre","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-422617","object_id":"column-422617","name":"intVaryID","name_without_path":"intVaryID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
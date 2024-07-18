window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11702","name":"NE_LedgerVouchMap_View","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view NE_LedgerVouchMap_View \r\nas\r\n\tselect distinct vouchMap.OperationTypeCode,vouchMap.VouchID,vouchMap.MakerID,vouchMap.PZGUID,vouchMap.MakePzDate,  \r\n\t\tcase when isnull(vouch.Code,'')='' then 0 else vouch.IsRedVouch end as IsRedVouch,\r\n\t\tcase when isnull(vouch.Code,'')='' then 0 else vouch.IsRedVerifyed end as IsRedVerifyed  \r\n\tfrom NE_LedgerVouchMap as vouchMap  \r\n\tinner join NE_OperationType as operationType  \r\n\t\ton vouchMap.OperationTypeCode=operationType.Code  \r\n\tleft join NE_ExpenVouch as vouch  \r\n\t\ton vouchMap.VouchID=vouch.ID and vouchMap.OperationTypeCode=vouch.OperationTypeCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"NE_LedgerVouchMap_View"},{"field":"Type","value":"View"}],"columns":[{"id":"column-249649","object_id":"column-249649","name":"OperationTypeCode","name_without_path":"OperationTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249643","object_id":"column-249643","name":"VouchID","name_without_path":"VouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249644","object_id":"column-249644","name":"MakerID","name_without_path":"MakerID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249645","object_id":"column-249645","name":"PZGUID","name_without_path":"PZGUID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249646","object_id":"column-249646","name":"MakePzDate","name_without_path":"MakePzDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249647","object_id":"column-249647","name":"IsRedVouch","name_without_path":"IsRedVouch","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-249648","object_id":"column-249648","name":"IsRedVerifyed","name_without_path":"IsRedVerifyed","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
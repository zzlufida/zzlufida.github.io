window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12080","name":"QM_RelQMRejectvoucherID","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create VIEW dbo.QM_RelQMRejectvoucherID  \r\nAS  \r\nSELECT qmrejectvoucher.id, AUTOID as autoid,\r\n(CASE WHEN qmrejectvoucher.BMERGECHECKFLAG = 1 THEN qmrejectvoucher.MERGECHECKAUTOID ELSE qmrejectvoucher.CHECKID END) AS CHECKID,\r\ncchecktypecode,\r\nCBYPRODUCT,CVOUCHTYPE  \r\nFROM qmrejectvoucher  \r\nleft join qmrejectvouchers on qmrejectvoucher.id=qmrejectvouchers.id","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"QM_RelQMRejectvoucherID"},{"field":"Type","value":"View"}],"columns":[{"id":"column-278172","object_id":"column-278172","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278173","object_id":"column-278173","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278174","object_id":"column-278174","name":"CHECKID","name_without_path":"CHECKID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278175","object_id":"column-278175","name":"cchecktypecode","name_without_path":"cchecktypecode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278176","object_id":"column-278176","name":"CBYPRODUCT","name_without_path":"CBYPRODUCT","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-278177","object_id":"column-278177","name":"CVOUCHTYPE","name_without_path":"CVOUCHTYPE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
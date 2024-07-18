window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10772","name":"fd_projdef_v","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create  VIEW dbo.fd_projdef_v\r\nAS\r\nselect case when parentdef.sprjcode is null then '' else parentdef.sprjcode end + \r\nfd_projdef.sprjcode as sprjcode ,fd_projdef.sprjname as sprjname ,fd_projdef.smemo as smemo \r\nfrom fd_projdef as fd_projdef left join fd_projdef as parentdef \r\n on fd_projdef.iparentid= parentdef.iid where (not fd_projdef.iparentid = 0 or not exists (select 1 from fd_projdef as sec where sec.iparentid=fd_projdef.iid))","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"fd_projdef_v"},{"field":"Type","value":"View"}],"columns":[{"id":"column-204769","object_id":"column-204769","name":"sprjcode","name_without_path":"sprjcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204770","object_id":"column-204770","name":"sprjname","name_without_path":"sprjname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"80","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-204771","object_id":"column-204771","name":"smemo","name_without_path":"smemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
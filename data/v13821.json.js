window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13821","name":"v_refer_incoterms","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view v_refer_incoterms as\r\nselect ex_incoterms.guid, ex_incoterms.iincotermid,   \r\nex_incoterms.cincotermcode, ex_incoterms.iincotermsremarkid,  ex_incoterms_remark.cincotermsremark,  \r\nex_incoterms.istartused, ex_startused.cbool as cstartused,   \r\nex_incoterms.idefault, ex_default.cbool as cdefault, ex_incoterms.iincotermsmemoid,ex_incoterms_memo.cincotermsmemo,  \r\nex_incoterms.bprefab,  \r\nconvert(nchar, convert(money,ex_incoterms.ufts), 2) as ufts  \r\nfrom ex_incoterms   \r\nleft join ex_incoterms_remark on ex_incoterms_remark.langid = @@langid and ex_incoterms_remark.iincotermsremarkid = ex_incoterms.iincotermsremarkid   \r\nleft join ex_incoterms_memo on ex_incoterms_memo.langid = @@langid and ex_incoterms_memo.iincotermsmemoid = ex_incoterms.iincotermsmemoid    \r\nleft join ex_boolean ex_startused on ex_startused.langid=@@langid and ex_startused.iboolid = ex_incoterms.istartused  \r\nleft join ex_boolean ex_default on ex_default.langid=@@langid and ex_default.iboolid = ex_incoterms.idefault  \r\nwhere istartused = 1\r\nunion    \r\nselect ex_incoterms_custom.guid, ex_incoterms_custom.iincotermid,   \r\nex_incoterms_custom.cincotermcode, null as iincotermsremarkid, ex_incoterms_custom.cincotermsremark,  \r\nex_incoterms_custom.istartused, ex_startused.cbool as cstartused,   \r\nex_incoterms_custom.idefault, ex_default.cbool as cdefault, null as iincotermsmemoid, ex_incoterms_custom.cincotermsmemo,  \r\nex_incoterms_custom.bprefab ,  \r\nconvert(nchar, convert(money,ex_incoterms_custom.ufts), 2) as ufts  \r\nfrom ex_incoterms_custom  \r\nleft join ex_boolean ex_startused on ex_startused.langid=@@langid and ex_startused.iboolid = ex_incoterms_custom.istartused  \r\nleft join ex_boolean ex_default on ex_default.langid=@@langid and ex_default.iboolid = ex_incoterms_custom.idefault\r\nwhere istartused = 1","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_refer_incoterms"},{"field":"Type","value":"View"}],"columns":[{"id":"column-401570","object_id":"column-401570","name":"guid","name_without_path":"guid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401571","object_id":"column-401571","name":"iincotermid","name_without_path":"iincotermid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401572","object_id":"column-401572","name":"cincotermcode","name_without_path":"cincotermcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401573","object_id":"column-401573","name":"iincotermsremarkid","name_without_path":"iincotermsremarkid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401574","object_id":"column-401574","name":"cincotermsremark","name_without_path":"cincotermsremark","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401575","object_id":"column-401575","name":"istartused","name_without_path":"istartused","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401576","object_id":"column-401576","name":"cstartused","name_without_path":"cstartused","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401577","object_id":"column-401577","name":"idefault","name_without_path":"idefault","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401582","object_id":"column-401582","name":"cdefault","name_without_path":"cdefault","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401578","object_id":"column-401578","name":"iincotermsmemoid","name_without_path":"iincotermsmemoid","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401579","object_id":"column-401579","name":"cincotermsmemo","name_without_path":"cincotermsmemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401580","object_id":"column-401580","name":"bprefab","name_without_path":"bprefab","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-401581","object_id":"column-401581","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
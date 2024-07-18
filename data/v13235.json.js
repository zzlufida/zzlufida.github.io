window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13235","name":"V_GC_DEFAULT","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.V_GC_DEFAULT\r\nAS\r\n--SELECT     A.id, A.cmaster_accid, D.acccode AS macccode, D.caddress AS mcaddress, D.datasource AS mdatasource, D.cdatabase AS mcdatabase, \r\n--                      D.cacc_id AS mcacc_id, D.caccname AS mcaccname, D.ibeginyear AS mibeginyear, A.cslave_accid, E.acccode AS sacccode, E.caddress AS scaddress, \r\n--                      E.datasource AS sdatasource, E.cdatabase AS scdatabase, E.cacc_id AS scacc_id, E.caccname AS scaccname, E.ibeginyear AS sibeginyear, C.ccode, \r\n--                      C.itype, C.cfilename, C.cname\r\n--FROM         dbo.GC_BASEJOINT AS A INNER JOIN\r\n--                      dbo.GC_BASEJOINTS AS B ON A.id = B.id INNER JOIN\r\n--                      dbo.GC_MASTERUPD AS C ON B.ccode = C.ccode INNER JOIN\r\n--                      dbo.GC_REGIST AS D ON A.cmaster_accid = D.accid INNER JOIN\r\n--                      dbo.GC_REGIST AS E ON A.cslave_accid = E.accid\r\nselect A.id, A.cmaster_accid, D.gcCode AS macccode, D.appServer AS mcaddress, D.ndatasource AS mdatasource, D.accountName AS mcdatabase, \r\n                      D.account AS mcacc_id, D.accountName AS mcaccname, null \r\nAS mibeginyear, A.cslave_accid, E.gcCode AS sacccode, E.appServer AS scaddress, \r\n                      E.ndatasource AS sdatasource, E.accountName AS scdatabase, E.account AS scacc_id, E.accountName AS scaccname, null AS sibeginyear, C.ccode, \r\n         \r\n             C.itype, C.cfilename, C.cname\r\nFROM         dbo.GC_BASEJOINT AS A INNER JOIN\r\n                      dbo.GC_BASEJOINTS AS B ON A.id = B.id INNER JOIN\r\n                      dbo.GC_MASTERUPD AS C ON B.ccode = C.ccode INNER JOIN                 \r\n   dbo.GC_AccountRegister AS D ON A.cmaster_accid = D.gcCode\r\nINNER JOIN dbo.GC_AccountRegister AS E ON A.cslave_accid = E.gcCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_GC_DEFAULT"},{"field":"Type","value":"View"}],"columns":[{"id":"column-358478","object_id":"column-358478","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358479","object_id":"column-358479","name":"cmaster_accid","name_without_path":"cmaster_accid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358480","object_id":"column-358480","name":"macccode","name_without_path":"macccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358481","object_id":"column-358481","name":"mcaddress","name_without_path":"mcaddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358482","object_id":"column-358482","name":"mdatasource","name_without_path":"mdatasource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358483","object_id":"column-358483","name":"mcdatabase","name_without_path":"mcdatabase","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358484","object_id":"column-358484","name":"mcacc_id","name_without_path":"mcacc_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358485","object_id":"column-358485","name":"mcaccname","name_without_path":"mcaccname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358486","object_id":"column-358486","name":"mibeginyear","name_without_path":"mibeginyear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358487","object_id":"column-358487","name":"cslave_accid","name_without_path":"cslave_accid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358488","object_id":"column-358488","name":"sacccode","name_without_path":"sacccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358489","object_id":"column-358489","name":"scaddress","name_without_path":"scaddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358490","object_id":"column-358490","name":"sdatasource","name_without_path":"sdatasource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358491","object_id":"column-358491","name":"scdatabase","name_without_path":"scdatabase","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358492","object_id":"column-358492","name":"scacc_id","name_without_path":"scacc_id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358493","object_id":"column-358493","name":"scaccname","name_without_path":"scaccname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358494","object_id":"column-358494","name":"sibeginyear","name_without_path":"sibeginyear","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358495","object_id":"column-358495","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358496","object_id":"column-358496","name":"itype","name_without_path":"itype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358497","object_id":"column-358497","name":"cfilename","name_without_path":"cfilename","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358498","object_id":"column-358498","name":"cname","name_without_path":"cname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
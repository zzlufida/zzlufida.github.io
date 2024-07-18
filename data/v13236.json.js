window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13236","name":"V_GC_DEFAULTS","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.V_GC_DEFAULTS\r\nAS\r\n--SELECT     '' AS id, '' AS cvalue, A.ccode, B.autoid AS updautoid, B.ctable, B.ctabledesc, B.cfield, B.cfielddesc, \r\n--                      (CASE WHEN C.cfieldtype = 'bit' THEN '布尔类型' WHEN C.cfieldtype = 'nvarchar' THEN '字符类型' WHEN C.cfieldtype = 'float' THEN '浮点数类型' WHEN\r\n--                       C.cfieldtype = 'decimal' THEN '浮点数类型' WHEN C.cfieldtype = 'numeric' THEN '浮点数类型' WHEN C.cfieldtype = 'tinyint' THEN '整数类型' WHEN C.cfieldtype\r\n--                       = 'smallint' THEN '整数类型' WHEN C.cfieldtype = 'int' THEN '整数类型' WHEN C.cfieldtype = 'bigint' THEN '整数类型' WHEN C.cfieldtype = 'datetime' THEN\r\n--                       '时间类型' WHEN C.cfieldtype = 'money' THEN '货币类型' WHEN C.cfieldtype = 'uniqueidentifier' THEN '标识类型' WHEN C.cfieldtype = 'ufmedia' THEN\r\n--                       '图片类型' WHEN C.cfieldtype = 'ufreference' THEN '参照类型' ELSE '未知类型' END) AS cfieldtype, \r\n--                      (CASE WHEN C.cfieldtype = 'bit' THEN '否' WHEN C.cfieldtype = 'nvarchar' THEN '空字符' WHEN C.cfieldtype = 'float' THEN '-1.79×10的308次方' WHEN\r\n--                       C.cfieldtype = 'decimal' THEN '-10的38次方+1' WHEN C.cfieldtype = 'numeric' THEN '-10的38次方+1' WHEN C.cfieldtype = 'tinyint' THEN '0' WHEN C.cfieldtype\r\n--                       = 'smallint' THEN '-32,768' WHEN C.cfieldtype = 'int' THEN '-2,147,483,648' WHEN C.cfieldtype = 'bigint' THEN '-9,223,372,036,854,775,808' WHEN C.cfieldtype\r\n--                       = 'datetime' THEN '1753-01-01' WHEN C.cfieldtype = 'money' THEN '-922,337,203,685,477.5808' WHEN C.cfieldtype = 'uniqueidentifier' THEN '全局唯一'\r\n--                       WHEN C.cfieldtype = 'ufmedia' THEN '' WHEN C.cfieldtype = 'ufreference' THEN '外键约束' ELSE '' END) AS cfieldmix, \r\n--                      (CASE WHEN C.cfieldtype = 'bit' THEN '是' WHEN C.cfieldtype = 'nvarchar' THEN '4,000位字符' WHEN C.cfieldtype = 'float' THEN '1.79×10的308次方' WHEN\r\n--                       C.cfieldtype = 'decimal' THEN '10的38次方-1' WHEN C.cfieldtype = 'numeric' THEN '10的38次方-1' WHEN C.cfieldtype = 'tinyint' THEN '255' WHEN C.cfieldtype\r\n--                       = 'smallint' THEN '32,767' WHEN C.cfieldtype = 'int' THEN '2,147,483,647' WHEN C.cfieldtype = 'bigint' THEN '9,223,372,036,854,775,807' WHEN C.cfieldtype\r\n--                       = 'datetime' THEN '9999-12-31' WHEN C.cfieldtype = 'money' THEN '922,337,203,685,477.5807' WHEN C.cfieldtype = 'uniqueidentifier' THEN '全局唯一'\r\n--                       WHEN C.cfieldtype = 'ufmedia' THEN '' WHEN C.cfieldtype = 'ufreference' THEN '外键约束' ELSE '' END) AS cfieldmax, \r\n--                      (CASE WHEN LEN(ISNULL(C.cfieldlength, N'255')) <> 0 THEN ISNULL(C.cfieldlength, N'255') ELSE '255' END) AS cfieldlength\r\n--FROM         dbo.GC_MASTERUPD AS A INNER JOIN\r\n--                      dbo.GC_MASTERUPDS AS B ON A.id = B.id INNER JOIN\r\n--                      dbo.GC_FIELD AS C ON B.ctable = C.ctable AND B.cfield = C.cfield\r\n--WHERE     (B.bselected = 1) AND (B.bdefault = 1)\r\nSELECT     J.id AS id, '' AS cvalue, A.ccode, B.autoid AS updautoid, B.ctable, B.ctabledesc, B.cfield, B.cfielddesc, \r\n                      (CASE WHEN C.cfieldtype = 'bit' THEN '布尔类型' WHEN C.cfieldtype = 'nvarchar' THEN '字符类型' WHEN C.cfieldtype = 'float' THEN '浮点数类型' WHEN\r\n                       C.cfieldtype = 'decimal' THEN '浮点数类型' WHEN C.cfieldtype = 'numeric' THEN '浮点数类型' WHEN C.cfieldtype = 'tinyint' THEN '整数类型' WHEN C.cfieldtype\r\n                       = 'smallint' THEN '整数类型' WHEN C.cfieldtype = 'int' THEN '整数类型' WHEN C.cfieldtype = 'bigint' THEN '整数类型' WHEN C.cfieldtype = 'datetime' THEN\r\n                       '时间类型' WHEN C.cfieldtype = 'money' THEN '货币类型' WHEN C.cfieldtype = 'uniqueidentifier' THEN '标识类型' WHEN C.cfieldtype = 'ufmedia' THEN\r\n                       '图片类型' WHEN C.cfieldtype = 'ufreference' THEN '参照类型' ELSE '未知类型' END) AS cfieldtype, \r\n                      (CASE WHEN C.cfieldtype = 'bit' THEN '否' WHEN C.cfieldtype = 'nvarchar' THEN '空字符' WHEN C.cfieldtype = 'float' THEN '-1.79×10的308次方' WHEN\r\n                       C.cfieldtype = 'decimal' THEN '-10的38次方+1' WHEN C.cfieldtype = 'numeric' THEN '-10的38次方+1' WHEN C.cfieldtype = 'tinyint' THEN '0' WHEN C.cfieldtype\r\n                       = 'smallint' THEN '-32,768' WHEN C.cfieldtype = 'int' THEN '-2,147,483,648' WHEN C.cfieldtype = 'bigint' THEN '-9,223,372,036,854,775,808' WHEN C.cfieldtype\r\n                       = 'datetime' THEN '1753-01-01' WHEN C.cfieldtype = 'money' THEN '-922,337,203,685,477.5808' WHEN C.cfieldtype = 'uniqueidentifier' THEN '全局唯一'\r\n                       WHEN C.cfieldtype = 'ufmedia' THEN '' WHEN C.cfieldtype = 'ufreference' THEN '外键约束' ELSE '' END) AS cfieldmix, \r\n                      (CASE WHEN C.cfieldtype = 'bit' THEN '是' WHEN C.cfieldtype = 'nvarchar' THEN '4,000位字符' WHEN C.cfieldtype = 'float' THEN '1.79×10的308次方' WHEN\r\n                       C.cfieldtype = 'decimal' THEN '10的38次方-1' WHEN C.cfieldtype = 'numeric' THEN '10的38次方-1' WHEN C.cfieldtype = 'tinyint' THEN '255' WHEN C.cfieldtype\r\n                       = 'smallint' THEN '32,767' WHEN C.cfieldtype = 'int' THEN '2,147,483,647' WHEN C.cfieldtype = 'bigint' THEN '9,223,372,036,854,775,807' WHEN C.cfieldtype\r\n                       = 'datetime' THEN '9999-12-31' WHEN C.cfieldtype = 'money' THEN '922,337,203,685,477.5807' WHEN C.cfieldtype = 'uniqueidentifier' THEN '全局唯一'\r\n                       WHEN C.cfieldtype = 'ufmedia' THEN '' WHEN C.cfieldtype = 'ufreference' THEN '外键约束' ELSE '' END) AS cfieldmax, \r\n                      (CASE WHEN LEN(ISNULL(C.cfieldlength, N'255')) <> 0 THEN ISNULL(C.cfieldlength, N'255') ELSE '255' END) AS cfieldlength\r\nFROM         dbo.GC_MASTERUPD AS A INNER JOIN\r\n                      dbo.GC_MASTERUPDS AS B ON A.id = B.id INNER JOIN\r\n                      dbo.GC_FIELD AS C ON B.ctable = C.ctable AND B.cfield = C.cfield\r\n\t\t\t\t\t  inner join GC_BASEJOINT J on 1=1\r\nWHERE     (B.bselected = 1) AND (B.bdefault = 1)","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_GC_DEFAULTS"},{"field":"Type","value":"View"}],"columns":[{"id":"column-358499","object_id":"column-358499","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358500","object_id":"column-358500","name":"cvalue","name_without_path":"cvalue","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358501","object_id":"column-358501","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358502","object_id":"column-358502","name":"updautoid","name_without_path":"updautoid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358503","object_id":"column-358503","name":"ctable","name_without_path":"ctable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358504","object_id":"column-358504","name":"ctabledesc","name_without_path":"ctabledesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358505","object_id":"column-358505","name":"cfield","name_without_path":"cfield","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358506","object_id":"column-358506","name":"cfielddesc","name_without_path":"cfielddesc","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358507","object_id":"column-358507","name":"cfieldtype","name_without_path":"cfieldtype","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358508","object_id":"column-358508","name":"cfieldmix","name_without_path":"cfieldmix","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"26","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358509","object_id":"column-358509","name":"cfieldmax","name_without_path":"cfieldmax","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"25","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-358510","object_id":"column-358510","name":"cfieldlength","name_without_path":"cfieldlength","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
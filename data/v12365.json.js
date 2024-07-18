window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12365","name":"SQ_BOMCOMPT","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--模拟bom子表增加存货自定义项\r\nCREATE VIEW [dbo].[SQ_BOMCOMPT] AS   \r\n  SELECT  SQ_BOMCOMP.ID,   \r\n  SQ_BOMCOMP.AUTOID,  \r\n  SQ_BOMCOMP.CCLDVERCODE,   \r\n  SQ_BOMMAIN.CVERSIONEXPLAIN AS CCLDVEREXPLAIN,  \r\n  SQ_BOMCOMP.PARTID,   \r\n  BAS_PART.INVCODE AS CINVCODE,  \r\n   INVENTORY.CINVNAME ,\r\n   Inventory.cInvAddCode,   \r\n  INVENTORY.CINVSTD ,   \r\n  INVENTORY.CCOMUNITCODE ,   \r\n  COMPUTATIONUNIT.CCOMUNITNAME ,   \r\n  BAS_PART.FREE1 AS CFREE1, BAS_PART.FREE2 AS CFREE2,   \r\n  BAS_PART.FREE3 AS CFREE3, BAS_PART.FREE4 AS CFREE4,   \r\n  BAS_PART.FREE5 AS CFREE5, BAS_PART.FREE6 AS CFREE6,   \r\n  BAS_PART.FREE7 AS CFREE7, BAS_PART.FREE8 AS CFREE8,   \r\n  BAS_PART.FREE9 AS CFREE9, BAS_PART.FREE10 AS CFREE10,  \r\n  INVENTORY.cInvDefine1 as  CINVDEFINE1,INVENTORY.cInvDefine2 as  CINVDEFINE2,\r\n  INVENTORY.cInvDefine3 as  CINVDEFINE3,INVENTORY.cInvDefine4 as  CINVDEFINE4,\r\n  INVENTORY.cInvDefine5 as  CINVDEFINE5,INVENTORY.cInvDefine6 as  CINVDEFINE6,\r\n  INVENTORY.cInvDefine7 as  CINVDEFINE7,INVENTORY.cInvDefine8 as  CINVDEFINE8,\r\n  INVENTORY.cInvDefine9 as  CINVDEFINE9,INVENTORY.cInvDefine10 as  CINVDEFINE10,\r\n  INVENTORY.cInvDefine11 as  CINVDEFINE11,INVENTORY.cInvDefine12 as  CINVDEFINE12,\r\n  INVENTORY.cInvDefine13 as  CINVDEFINE13,INVENTORY.cInvDefine14 as  CINVDEFINE14,\r\n  INVENTORY.cInvDefine15 as  CINVDEFINE15,INVENTORY.cInvDefine16 as  CINVDEFINE16,\r\n  SQ_BOMCOMP.FBASEQTY,   \r\n  SQ_BOMCOMP.FBASEQTYN,   \r\n  SQ_BOMCOMP.FBASEQTYD,   \r\n  SQ_BOMCOMP.FCOMPSCRP,   \r\n  SQ_BOMCOMP.CFIXORALTER ,\r\n  SQ_BOMCOMP.BVIRTUAL\r\n  FROM SQ_BOMCOMP LEFT JOIN SQ_BOMMAIN ON SQ_BOMMAIN.CVERSIONCODE=SQ_BOMCOMP.CCLDVERCODE   \r\n  INNER JOIN BAS_PART ON BAS_PART.PARTID=SQ_BOMCOMP.PARTID   \r\n  INNER JOIN INVENTORY ON INVENTORY.CINVCODE=BAS_PART.INVCODE  \r\n  LEFT JOIN COMPUTATIONUNIT ON INVENTORY.CCOMUNITCODE=COMPUTATIONUNIT.CCOMUNITCODE","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"SQ_BOMCOMPT"},{"field":"Type","value":"View"}],"columns":[{"id":"column-300989","object_id":"column-300989","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300990","object_id":"column-300990","name":"AUTOID","name_without_path":"AUTOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300991","object_id":"column-300991","name":"CCLDVERCODE","name_without_path":"CCLDVERCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300992","object_id":"column-300992","name":"CCLDVEREXPLAIN","name_without_path":"CCLDVEREXPLAIN","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300993","object_id":"column-300993","name":"PARTID","name_without_path":"PARTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300994","object_id":"column-300994","name":"CINVCODE","name_without_path":"CINVCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300995","object_id":"column-300995","name":"CINVNAME","name_without_path":"CINVNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300996","object_id":"column-300996","name":"cInvAddCode","name_without_path":"cInvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300997","object_id":"column-300997","name":"CINVSTD","name_without_path":"CINVSTD","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300998","object_id":"column-300998","name":"CCOMUNITCODE","name_without_path":"CCOMUNITCODE","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-300999","object_id":"column-300999","name":"CCOMUNITNAME","name_without_path":"CCOMUNITNAME","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301000","object_id":"column-301000","name":"CFREE1","name_without_path":"CFREE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301001","object_id":"column-301001","name":"CFREE2","name_without_path":"CFREE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301002","object_id":"column-301002","name":"CFREE3","name_without_path":"CFREE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301003","object_id":"column-301003","name":"CFREE4","name_without_path":"CFREE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301004","object_id":"column-301004","name":"CFREE5","name_without_path":"CFREE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301005","object_id":"column-301005","name":"CFREE6","name_without_path":"CFREE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301006","object_id":"column-301006","name":"CFREE7","name_without_path":"CFREE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301007","object_id":"column-301007","name":"CFREE8","name_without_path":"CFREE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301008","object_id":"column-301008","name":"CFREE9","name_without_path":"CFREE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301009","object_id":"column-301009","name":"CFREE10","name_without_path":"CFREE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301010","object_id":"column-301010","name":"CINVDEFINE1","name_without_path":"CINVDEFINE1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301011","object_id":"column-301011","name":"CINVDEFINE2","name_without_path":"CINVDEFINE2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301012","object_id":"column-301012","name":"CINVDEFINE3","name_without_path":"CINVDEFINE3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301013","object_id":"column-301013","name":"CINVDEFINE4","name_without_path":"CINVDEFINE4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301014","object_id":"column-301014","name":"CINVDEFINE5","name_without_path":"CINVDEFINE5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301015","object_id":"column-301015","name":"CINVDEFINE6","name_without_path":"CINVDEFINE6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301016","object_id":"column-301016","name":"CINVDEFINE7","name_without_path":"CINVDEFINE7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301017","object_id":"column-301017","name":"CINVDEFINE8","name_without_path":"CINVDEFINE8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301018","object_id":"column-301018","name":"CINVDEFINE9","name_without_path":"CINVDEFINE9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301019","object_id":"column-301019","name":"CINVDEFINE10","name_without_path":"CINVDEFINE10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301020","object_id":"column-301020","name":"CINVDEFINE11","name_without_path":"CINVDEFINE11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301021","object_id":"column-301021","name":"CINVDEFINE12","name_without_path":"CINVDEFINE12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301022","object_id":"column-301022","name":"CINVDEFINE13","name_without_path":"CINVDEFINE13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301023","object_id":"column-301023","name":"CINVDEFINE14","name_without_path":"CINVDEFINE14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301024","object_id":"column-301024","name":"CINVDEFINE15","name_without_path":"CINVDEFINE15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301025","object_id":"column-301025","name":"CINVDEFINE16","name_without_path":"CINVDEFINE16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301026","object_id":"column-301026","name":"FBASEQTY","name_without_path":"FBASEQTY","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301027","object_id":"column-301027","name":"FBASEQTYN","name_without_path":"FBASEQTYN","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301028","object_id":"column-301028","name":"FBASEQTYD","name_without_path":"FBASEQTYD","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301029","object_id":"column-301029","name":"FCOMPSCRP","name_without_path":"FCOMPSCRP","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301030","object_id":"column-301030","name":"CFIXORALTER","name_without_path":"CFIXORALTER","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-301031","object_id":"column-301031","name":"BVIRTUAL","name_without_path":"BVIRTUAL","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
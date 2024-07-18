window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12664","name":"V_BO_SaleOrder","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view V_BO_SaleOrder\r\nas\r\nselect OrderType=convert(int,1),b.isosid as OrderDId,a.cSoCode as OrderCode,b.iRowNo as OrderSeq,\r\n       b.cinvcode as InvCode,i.cinvName as InvName,i.cinvAddcode as InvAddCode,i.cinvstd as InvStd,\r\n       b.cfree1 as InvFree_1,b.cfree2 as InvFree_2,b.cfree3 as InvFree_3,b.cfree4 as InvFree_4,b.cfree5 as InvFree_5,\r\n       b.cfree6 as InvFree_6,b.cfree7 as InvFree_7,b.cfree8 as InvFree_8,b.cfree9 as InvFree_9,b.cfree10 as InvFree_10,\r\n       b.dPreMoDate as PreMoDate,\r\n       i.cinvdefine1 as InvDefine_1,i.cinvdefine2 as InvDefine_2,i.cinvdefine3 as InvDefine_3,i.cinvdefine4 as InvDefine_4,\r\n       i.cinvdefine5 as InvDefine_5,i.cinvdefine6 as InvDefine_6,i.cinvdefine7 as InvDefine_7,i.cinvdefine8 as InvDefine_8,\r\n       i.cinvdefine9 as InvDefine_9,i.cinvdefine10 as InvDefine_10,i.cinvdefine11 as InvDefine_11,i.cinvdefine12 as InvDefine_12,\r\n       i.cinvdefine13 as InvDefine_13,i.cinvdefine14 as InvDefine_14,i.cinvdefine15 as InvDefine_15,i.cinvdefine16 as InvDefine_16,\r\n       b.cdefine22 as Define_22,b.cdefine23 as Define_23,b.cdefine24 as Define_24,b.cdefine25 as Define_25,\r\n       b.cdefine26 as Define_26,b.cdefine27 as Define_27,b.cdefine28 as Define_28,b.cdefine29 as Define_29,\r\n       b.cdefine30 as Define_30,b.cdefine31 as Define_31,b.cdefine32 as Define_32,b.cdefine33 as Define_33,\r\n       b.cdefine34 as Define_34,b.cdefine35 as Define_35,b.cdefine36 as Define_36,b.cdefine37 as Define_37,\r\n       a.clocker,a.cverifier,b.cSCloser,OrderBom=isnull(b.bOrderBom,0),OrderBomOver=isnull(b.bOrderBomOver,0)\r\n\r\nfrom SO_SOMain a with(nolock)\r\ninner join so_sodetails b with(nolock) on a.id=b.id\r\ninner join Inventory i with(nolock) on b.cinvcode=i.cinvcode \r\nwhere b.bOrderBom=1 or isnull(b.bOrderBomOver,0)>0\r\n--where ( ISNULL(cverifier,'') <>'' or ISNULL(clocker,'') <> '' ) \r\nunion all\r\nselect OrderType=convert(int,3),b.autoid as OrderDId,a.ccode as OrderCode,b.iRowNo as OrderSeq,\r\n       b.cinvcode as InvCode,i.cinvName as InvName,i.cinvAddcode as InvAddCode,i.cinvstd as InvStd,\r\n       b.cfree1 as InvFree_1,b.cfree2 as InvFree_2,b.cfree3 as InvFree_3,b.cfree4 as InvFree_4,b.cfree5 as InvFree_5,\r\n       b.cfree6 as InvFree_6,b.cfree7 as InvFree_7,b.cfree8 as InvFree_8,b.cfree9 as InvFree_9,b.cfree10 as InvFree_10,\r\n       b.dcompletedate as PreMoDate,\r\n       i.cinvdefine1 as InvDefine_1,i.cinvdefine2 as InvDefine_2,i.cinvdefine3 as InvDefine_3,i.cinvdefine4 as InvDefine_4,\r\n       i.cinvdefine5 as InvDefine_5,i.cinvdefine6 as InvDefine_6,i.cinvdefine7 as InvDefine_7,i.cinvdefine8 as InvDefine_8,\r\n       i.cinvdefine9 as InvDefine_9,i.cinvdefine10 as InvDefine_10,i.cinvdefine11 as InvDefine_11,i.cinvdefine12 as InvDefine_12,\r\n       i.cinvdefine13 as InvDefine_13,i.cinvdefine14 as InvDefine_14,i.cinvdefine15 as InvDefine_15,i.cinvdefine16 as InvDefine_16,\r\n       b.cdefine22 as Define_22,b.cdefine23 as Define_23,b.cdefine24 as Define_24,b.cdefine25 as Define_25,\r\n       b.cdefine26 as Define_26,b.cdefine27 as Define_27,b.cdefine28 as Define_28,b.cdefine29 as Define_29,\r\n       b.cdefine30 as Define_30,b.cdefine31 as Define_31,b.cdefine32 as Define_32,b.cdefine33 as Define_33,\r\n       b.cdefine34 as Define_34,b.cdefine35 as Define_35,b.cdefine36 as Define_36,b.cdefine37 as Define_37,\r\n       a.clocker,a.cverifier,(case when ISNULL(b.cLineCloser,'')='' then null else b.cLineCloser end) as cSCloser,OrderBom=isnull(b.bOrderBom,0),OrderBomOver=isnull(b.bOrderBomOver,0)\r\n\r\nfrom Ex_Order a with(nolock)\r\ninner join Ex_OrderDetail b with(nolock) on a.id=b.id\r\ninner join Inventory i with(nolock) on b.cinvcode=i.cinvcode \r\n--where ( ISNULL(cverifier,'') <>'' or ISNULL(clocker,'') <> '' )\r\nwhere b.bOrderBom=1 or isnull(b.bOrderBomOver,0)>0  \r\nunion all\r\nselect OrderType=convert(int,4),b.autoid as OrderDId,a.cCode as OrderCode,isnull(b.iRowNo,0) as OrderSeq,\r\n       b.cinvcode as InvCode,i.cinvName as InvName,i.cinvAddcode as InvAddCode,i.cinvstd as InvStd,\r\n       b.cfree1 as InvFree_1,b.cfree2 as InvFree_2,b.cfree3 as InvFree_3,b.cfree4 as InvFree_4,b.cfree5 as InvFree_5,\r\n       b.cfree6 as InvFree_6,b.cfree7 as InvFree_7,b.cfree8 as InvFree_8,b.cfree9 as InvFree_9,b.cfree10 as InvFree_10,\r\n       null as PreMoDate,\r\n       i.cinvdefine1 as InvDefine_1,i.cinvdefine2 as InvDefine_2,i.cinvdefine3 as InvDefine_3,i.cinvdefine4 as InvDefine_4,\r\n       i.cinvdefine5 as InvDefine_5,i.cinvdefine6 as InvDefine_6,i.cinvdefine7 as InvDefine_7,i.cinvdefine8 as InvDefine_8,\r\n       i.cinvdefine9 as InvDefine_9,i.cinvdefine10 as InvDefine_10,i.cinvdefine11 as InvDefine_11,i.cinvdefine12 as InvDefine_12,\r\n       i.cinvdefine13 as InvDefine_13,i.cinvdefine14 as InvDefine_14,i.cinvdefine15 as InvDefine_15,i.cinvdefine16 as InvDefine_16,\r\n       b.cdefine22 as Define_22,b.cdefine23 as Define_23,b.cdefine24 as Define_24,b.cdefine25 as Define_25,\r\n       b.cdefine26 as Define_26,b.cdefine27 as Define_27,b.cdefine28 as Define_28,b.cdefine29 as Define_29,\r\n       b.cdefine30 as Define_30,b.cdefine31 as Define_31,b.cdefine32 as Define_32,b.cdefine33 as Define_33,\r\n       b.cdefine34 as Define_34,b.cdefine35 as Define_35,b.cdefine36 as Define_36,b.cdefine37 as Define_37,\r\n       clocker='',a.cverifier,b.cSCloser,OrderBom=isnull(b.bOrderBom,0),OrderBomOver=isnull(b.bOrderBomOver,0)\r\n\r\nfrom SA_PreOrderMain a with(nolock)\r\ninner join SA_PreOrderDetails b with(nolock) on a.id=b.id\r\ninner join Inventory i with(nolock) on b.cinvcode=i.cinvcode \r\nwhere b.bOrderBom=1 or isnull(b.bOrderBomOver,0)>0","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"V_BO_SaleOrder"},{"field":"Type","value":"View"}],"columns":[{"id":"column-315670","object_id":"column-315670","name":"OrderType","name_without_path":"OrderType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315671","object_id":"column-315671","name":"OrderDId","name_without_path":"OrderDId","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315672","object_id":"column-315672","name":"OrderCode","name_without_path":"OrderCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315673","object_id":"column-315673","name":"OrderSeq","name_without_path":"OrderSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315674","object_id":"column-315674","name":"InvCode","name_without_path":"InvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315675","object_id":"column-315675","name":"InvName","name_without_path":"InvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315676","object_id":"column-315676","name":"InvAddCode","name_without_path":"InvAddCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315677","object_id":"column-315677","name":"InvStd","name_without_path":"InvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315678","object_id":"column-315678","name":"InvFree_1","name_without_path":"InvFree_1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315679","object_id":"column-315679","name":"InvFree_2","name_without_path":"InvFree_2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315680","object_id":"column-315680","name":"InvFree_3","name_without_path":"InvFree_3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315681","object_id":"column-315681","name":"InvFree_4","name_without_path":"InvFree_4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315682","object_id":"column-315682","name":"InvFree_5","name_without_path":"InvFree_5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315683","object_id":"column-315683","name":"InvFree_6","name_without_path":"InvFree_6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315684","object_id":"column-315684","name":"InvFree_7","name_without_path":"InvFree_7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315685","object_id":"column-315685","name":"InvFree_8","name_without_path":"InvFree_8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315686","object_id":"column-315686","name":"InvFree_9","name_without_path":"InvFree_9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315687","object_id":"column-315687","name":"InvFree_10","name_without_path":"InvFree_10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315688","object_id":"column-315688","name":"PreMoDate","name_without_path":"PreMoDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315689","object_id":"column-315689","name":"InvDefine_1","name_without_path":"InvDefine_1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315690","object_id":"column-315690","name":"InvDefine_2","name_without_path":"InvDefine_2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315691","object_id":"column-315691","name":"InvDefine_3","name_without_path":"InvDefine_3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315692","object_id":"column-315692","name":"InvDefine_4","name_without_path":"InvDefine_4","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315693","object_id":"column-315693","name":"InvDefine_5","name_without_path":"InvDefine_5","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315694","object_id":"column-315694","name":"InvDefine_6","name_without_path":"InvDefine_6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315695","object_id":"column-315695","name":"InvDefine_7","name_without_path":"InvDefine_7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315696","object_id":"column-315696","name":"InvDefine_8","name_without_path":"InvDefine_8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315697","object_id":"column-315697","name":"InvDefine_9","name_without_path":"InvDefine_9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315698","object_id":"column-315698","name":"InvDefine_10","name_without_path":"InvDefine_10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315699","object_id":"column-315699","name":"InvDefine_11","name_without_path":"InvDefine_11","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315700","object_id":"column-315700","name":"InvDefine_12","name_without_path":"InvDefine_12","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315701","object_id":"column-315701","name":"InvDefine_13","name_without_path":"InvDefine_13","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315702","object_id":"column-315702","name":"InvDefine_14","name_without_path":"InvDefine_14","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315703","object_id":"column-315703","name":"InvDefine_15","name_without_path":"InvDefine_15","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315704","object_id":"column-315704","name":"InvDefine_16","name_without_path":"InvDefine_16","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315705","object_id":"column-315705","name":"Define_22","name_without_path":"Define_22","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315706","object_id":"column-315706","name":"Define_23","name_without_path":"Define_23","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315707","object_id":"column-315707","name":"Define_24","name_without_path":"Define_24","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315708","object_id":"column-315708","name":"Define_25","name_without_path":"Define_25","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315709","object_id":"column-315709","name":"Define_26","name_without_path":"Define_26","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315710","object_id":"column-315710","name":"Define_27","name_without_path":"Define_27","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315711","object_id":"column-315711","name":"Define_28","name_without_path":"Define_28","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315712","object_id":"column-315712","name":"Define_29","name_without_path":"Define_29","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315713","object_id":"column-315713","name":"Define_30","name_without_path":"Define_30","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315714","object_id":"column-315714","name":"Define_31","name_without_path":"Define_31","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315715","object_id":"column-315715","name":"Define_32","name_without_path":"Define_32","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315716","object_id":"column-315716","name":"Define_33","name_without_path":"Define_33","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315717","object_id":"column-315717","name":"Define_34","name_without_path":"Define_34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315718","object_id":"column-315718","name":"Define_35","name_without_path":"Define_35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315719","object_id":"column-315719","name":"Define_36","name_without_path":"Define_36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315720","object_id":"column-315720","name":"Define_37","name_without_path":"Define_37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315721","object_id":"column-315721","name":"clocker","name_without_path":"clocker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315722","object_id":"column-315722","name":"cverifier","name_without_path":"cverifier","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315723","object_id":"column-315723","name":"cSCloser","name_without_path":"cSCloser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315724","object_id":"column-315724","name":"OrderBom","name_without_path":"OrderBom","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-315725","object_id":"column-315725","name":"OrderBomOver","name_without_path":"OrderBomOver","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
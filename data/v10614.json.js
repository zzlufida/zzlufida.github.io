window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10614","name":"EQ_QRptEQData","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE  VIEW dbo.EQ_QRptEQData\r\nAS\r\nSELECT a.cEQCode, a.cEQName, a.cEQTypeCode, b.cEQTypeName, a.cStaCode, \r\n      d.cStaName, a.cABCCode, e.cABCName, a.cLBCode, f.cLBName, a.cSupEQCode, \r\n      k.cEQName AS cSupEQName, a.cPCode, c.cPName, a.cDepCode, g.cDepName, \r\n      a.cSeq, a.cVenCode, h.cVenName, a.cZZVen, i.cVenName AS cZZVenName, \r\n      a.dtCCDate, CONVERT(nvarchar(10), YEAR(a.dtCCDate)) AS dtCCYear, a.dtSYdate, \r\n      a.cWorkDep, j.cDepName AS cWorkDepName, a.cMaker, a.dtDate, a.cChecker, \r\n      a.dtAudit, b.cgg, b.cxh, b.dblJX, b.dblDQ, \r\n      CONVERT(nvarchar(20), b.intJM) as intJM,\r\n      CONVERT(nvarchar(20),b.intDX) as intDX,\r\n      CONVERT(nvarchar(20),b.intXY) as intXY, \r\n      CONVERT(nvarchar(20),b.intTZ) as intTZ, \r\n      a.iNumEQ, a.dblValue, a.dblDeprSum, a.dblTrueValue\r\nFROM dbo.EQ_EQData a LEFT OUTER JOIN\r\n      dbo.EQ_EQType b ON a.cEQTypeCode = b.cEQTypeCode LEFT OUTER JOIN\r\n      dbo.EQ_Position c ON a.cPCode = c.cPCode LEFT OUTER JOIN\r\n      dbo.EQ_Status d ON a.cStaCode = d.cStaCode LEFT OUTER JOIN\r\n      dbo.EQ_ABCType e ON a.cABCCode = e.cABCCode LEFT OUTER JOIN\r\n      dbo.EQ_LB f ON a.cLBCode = f.cLBCode LEFT OUTER JOIN\r\n      dbo.Department g ON a.cDepCode = g.cDepCode LEFT OUTER JOIN\r\n      dbo.Vendor h ON a.cVenCode = h.cVenCode LEFT OUTER JOIN\r\n      dbo.Vendor i ON a.cZZVen = i.cVenCode LEFT OUTER JOIN\r\n      dbo.Department j ON a.cWorkDep = j.cDepCode LEFT OUTER JOIN\r\n      dbo.EQ_EQData k ON a.cSupEQCode = k.cEQCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EQ_QRptEQData"},{"field":"Type","value":"View"}],"columns":[{"id":"column-197611","object_id":"column-197611","name":"cEQCode","name_without_path":"cEQCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197612","object_id":"column-197612","name":"cEQName","name_without_path":"cEQName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197613","object_id":"column-197613","name":"cEQTypeCode","name_without_path":"cEQTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197614","object_id":"column-197614","name":"cEQTypeName","name_without_path":"cEQTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197615","object_id":"column-197615","name":"cStaCode","name_without_path":"cStaCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197616","object_id":"column-197616","name":"cStaName","name_without_path":"cStaName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197617","object_id":"column-197617","name":"cABCCode","name_without_path":"cABCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197618","object_id":"column-197618","name":"cABCName","name_without_path":"cABCName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197619","object_id":"column-197619","name":"cLBCode","name_without_path":"cLBCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197620","object_id":"column-197620","name":"cLBName","name_without_path":"cLBName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197621","object_id":"column-197621","name":"cSupEQCode","name_without_path":"cSupEQCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197622","object_id":"column-197622","name":"cSupEQName","name_without_path":"cSupEQName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197623","object_id":"column-197623","name":"cPCode","name_without_path":"cPCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"15","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197624","object_id":"column-197624","name":"cPName","name_without_path":"cPName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197625","object_id":"column-197625","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197626","object_id":"column-197626","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197627","object_id":"column-197627","name":"cSeq","name_without_path":"cSeq","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197628","object_id":"column-197628","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197629","object_id":"column-197629","name":"cVenName","name_without_path":"cVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197630","object_id":"column-197630","name":"cZZVen","name_without_path":"cZZVen","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197631","object_id":"column-197631","name":"cZZVenName","name_without_path":"cZZVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197632","object_id":"column-197632","name":"dtCCDate","name_without_path":"dtCCDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197633","object_id":"column-197633","name":"dtCCYear","name_without_path":"dtCCYear","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197634","object_id":"column-197634","name":"dtSYdate","name_without_path":"dtSYdate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197635","object_id":"column-197635","name":"cWorkDep","name_without_path":"cWorkDep","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197636","object_id":"column-197636","name":"cWorkDepName","name_without_path":"cWorkDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197637","object_id":"column-197637","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197638","object_id":"column-197638","name":"dtDate","name_without_path":"dtDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197639","object_id":"column-197639","name":"cChecker","name_without_path":"cChecker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197640","object_id":"column-197640","name":"dtAudit","name_without_path":"dtAudit","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197641","object_id":"column-197641","name":"cgg","name_without_path":"cgg","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197642","object_id":"column-197642","name":"cxh","name_without_path":"cxh","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197643","object_id":"column-197643","name":"dblJX","name_without_path":"dblJX","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197644","object_id":"column-197644","name":"dblDQ","name_without_path":"dblDQ","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197645","object_id":"column-197645","name":"intJM","name_without_path":"intJM","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197646","object_id":"column-197646","name":"intDX","name_without_path":"intDX","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197647","object_id":"column-197647","name":"intXY","name_without_path":"intXY","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197648","object_id":"column-197648","name":"intTZ","name_without_path":"intTZ","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197649","object_id":"column-197649","name":"iNumEQ","name_without_path":"iNumEQ","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197650","object_id":"column-197650","name":"dblValue","name_without_path":"dblValue","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197651","object_id":"column-197651","name":"dblDeprSum","name_without_path":"dblDeprSum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-197652","object_id":"column-197652","name":"dblTrueValue","name_without_path":"dblTrueValue","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};
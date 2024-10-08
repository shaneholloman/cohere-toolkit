"""Add is_private column to agents,
   Update unique constraint on agents. Name, version -> name, version, user_id

Revision ID: 71d7b35c8a44
Revises: 117f0d9b1d3d
Create Date: 2024-08-07 17:49:41.312202

"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "71d7b35c8a44"
down_revision: Union[str, None] = "117f0d9b1d3d"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "agents",
        sa.Column(
            "is_private", sa.Boolean(), nullable=False, server_default=sa.false()
        ),
    )

    op.drop_constraint("_name_version_uc", "agents", type_="unique")
    op.create_unique_constraint(
        "_name_version_user_uc", "agents", ["name", "version", "user_id"]
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint("_name_version_user_uc", "agents", type_="unique")
    op.create_unique_constraint("_name_version_uc", "agents", ["name", "version"])
    op.drop_column("agents", "is_private")
    # ### end Alembic commands ###

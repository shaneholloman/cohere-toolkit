"""Add Tool Auth

Revision ID: a6efd9f047b4
Revises: 8bc604e45f2d
Create Date: 2024-06-21 10:04:26.857068

"""

from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "a6efd9f047b4"
down_revision: Union[str, None] = "8bc604e45f2d"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table(
        "tool_auth",
        sa.Column("user_id", sa.Text(), nullable=False),
        sa.Column("tool_id", sa.Text(), nullable=False),
        sa.Column("token_type", sa.Text(), nullable=False),
        sa.Column("encrypted_access_token", sa.LargeBinary(), nullable=False),
        sa.Column("encrypted_refresh_token", sa.LargeBinary(), nullable=False),
        sa.Column("expires_at", sa.DateTime(), nullable=False),
        sa.Column("id", sa.String(), nullable=False),
        sa.Column("created_at", sa.DateTime(), nullable=True),
        sa.Column("updated_at", sa.DateTime(), nullable=True),
        sa.PrimaryKeyConstraint("id"),
        sa.UniqueConstraint("user_id", "tool_id", name="_user_tool_uc"),
    )
    op.create_index("tool_auth_index", "tool_auth", ["user_id", "tool_id"], unique=True)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index("tool_auth_index", table_name="tool_auth")
    op.drop_table("tool_auth")
    # ### end Alembic commands ###
